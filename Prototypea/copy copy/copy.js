
    /* --- Referencias DOM --- */
    const newTaskInput = document.getElementById('newTask');
    const addBtn = document.getElementById('addBtn');
    const clearBtn = document.getElementById('clearBtn');
    const tasksList = document.getElementById('tasksList');
    const completedCountEl = document.getElementById('completedCount');
    const totalCountEl = document.getElementById('totalCount');
    const emptyMsg = document.getElementById('emptyMsg');
    const lastAction = document.getElementById('lastAction');

    /* --- Estado en memoria (array simple) --- */
    let tasks = []; // cada tarea: { id: number, text: string, done: boolean }
    let nextId = 1;

    /* --- Funciones --- */
    function render() {
      // vacía la lista
      tasksList.innerHTML = '';

      if (tasks.length === 0) {
        emptyMsg.style.display = 'block';
      } else {
        emptyMsg.style.display = 'none';
      }

      // crear elementos DOM para cada tarea
      for (const t of tasks) {
        const li = document.createElement('li');
        li.className = 'item' + (t.done ? ' checked' : '');
        li.dataset.id = t.id;

        // checkbox
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = t.done;
        cb.addEventListener('change', () => toggleDone(t.id));

        // etiqueta
        const label = document.createElement('label');
        label.textContent = t.text;

        // botón eliminar (pequeño)
        const delBtn = document.createElement('button');
        delBtn.className = 'small-btn';
        delBtn.title = 'Eliminar tarea';
        delBtn.innerHTML = '🗑';
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          removeTask(t.id);
        });

        // permitir marcar al hacer click en la etiqueta
        label.addEventListener('click', () => {
          cb.checked = !cb.checked;
          // provocar el cambio
          cb.dispatchEvent(new Event('change'));
        });

        li.appendChild(cb);
        li.appendChild(label);
        li.appendChild(delBtn);

        tasksList.appendChild(li);
      }

      updateCounts();
    }

    function updateCounts() {
      const total = tasks.length;
      const done = tasks.filter(t => t.done).length;
      totalCountEl.textContent = total;
      completedCountEl.textContent = done;
    }

    function addTask(text) {
      const trimmed = text.trim();
      if (!trimmed) return;
      tasks.push({ id: nextId++, text: trimmed, done: false });
      lastAction.textContent = `Tarea añadida: "${trimmed}"`;
      render();
      newTaskInput.value = '';
      newTaskInput.focus();
    }

    function removeTask(id) {
      const idx = tasks.findIndex(t => t.id === id);
      if (idx === -1) return;
      const removed = tasks.splice(idx, 1)[0];
      lastAction.textContent = `Tarea eliminada: "${removed.text}"`;
      render();
    }

    function toggleDone(id) {
      const t = tasks.find(x => x.id === id);
      if (!t) return;
      t.done = !t.done;
      lastAction.textContent = t.done ? `Completada: "${t.text}"` : `Marcada sin completar: "${t.text}"`;
      render();
    }

    function clearCompleted() {
      const before = tasks.length;
      tasks = tasks.filter(t => !t.done);
      const removed = before - tasks.length;
      lastAction.textContent = `Borradas ${removed} completadas.`;
      render();
    }

    /* --- Eventos UI --- */
    addBtn.addEventListener('click', () => addTask(newTaskInput.value));
    newTaskInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addTask(newTaskInput.value);
    });
    clearBtn.addEventListener('click', clearCompleted);

    /* Render inicial */
    render();

    /* 
      Si quieres persistencia local (opcional), descomenta las funciones y llamadas siguientes:

    // // Guardar en localStorage:
    // function save() { localStorage.setItem('myChecklist', JSON.stringify({tasks, nextId})); }
    // function load() {
    //   const raw = localStorage.getItem('myChecklist');
    //   if (!raw) return;
    //   try {
    //     const data = JSON.parse(raw);
    //     tasks = data.tasks || [];
    //     nextId = data.nextId || (tasks.length + 1);
    //   } catch(e) { console.warn('No se pudo cargar'); }
    // }
    // // Llamar load() antes de render() y save() dentro de render() o tras cambios.
    */

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.editingId = null;
        this.initEventListeners();
        this.updateStats();
    }

    initEventListeners() {
        const addBtn = document.getElementById('addBtn');
        const todoInput = document.getElementById('todoInput');
        const searchBox = document.getElementById('searchBox');
        const filterBtns = document.querySelectorAll('.filter-btn');

        addBtn.addEventListener('click', () => this.handleAddTodo());
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleAddTodo();
        });

        searchBox.addEventListener('input', (e) => this.handleSearch(e.target.value));

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.renderTodos();
            });
        });
    }

    handleAddTodo() {
        const input = document.getElementById('todoInput');
        const category = document.getElementById('categorySelect').value;
        const priority = document.getElementById('prioritySelect').value;
        const text = input.value.trim();

        if (!text) return;

        if (this.editingId) {
            this.updateTodo(this.editingId, text, category, priority);
            this.editingId = null;
            document.getElementById('addBtn').textContent = 'Add Task';
        } else {
            this.addTodo(text, category, priority);
        }

        input.value = '';
    }

    addTodo(text, category, priority) {
        const todo = {
            id: Date.now(),
            text,
            category,
            priority,
            completed: false,
            createdAt: new Date().toLocaleDateString()
        };

        this.todos.unshift(todo);
        this.renderTodos();
        this.updateStats();
    }

    updateTodo(id, text, category, priority) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.text = text;
            todo.category = category;
            todo.priority = priority;
            this.renderTodos();
            this.updateStats();
        }
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.renderTodos();
            this.updateStats();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.renderTodos();
        this.updateStats();
    }

    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            document.getElementById('todoInput').value = todo.text;
            document.getElementById('categorySelect').value = todo.category;
            document.getElementById('prioritySelect').value = todo.priority;
            document.getElementById('addBtn').textContent = 'Update Task';
            this.editingId = id;
        }
    }

    handleSearch(searchTerm) {
        this.searchTerm = searchTerm.toLowerCase();
        this.renderTodos();
    }

    getFilteredTodos() {
        let filtered = this.todos;

        // Apply search filter
        if (this.searchTerm) {
            filtered = filtered.filter(todo => 
                todo.text.toLowerCase().includes(this.searchTerm)
            );
        }

        // Apply category/status filter
        switch (this.currentFilter) {
            case 'pending':
                filtered = filtered.filter(todo => !todo.completed);
                break;
            case 'completed':
                filtered = filtered.filter(todo => todo.completed);
                break;
            case 'high':
                filtered = filtered.filter(todo => todo.priority === 'high');
                break;
            case 'work':
            case 'personal':
                filtered = filtered.filter(todo => todo.category === this.currentFilter);
                break;
        }

        return filtered;
    }

    renderTodos() {
        const todoList = document.getElementById('todoList');
        const emptyState = document.getElementById('emptyState');
        const filteredTodos = this.getFilteredTodos();

        if (filteredTodos.length === 0) {
            todoList.innerHTML = '';
            todoList.appendChild(emptyState);
            return;
        }

        todoList.innerHTML = '';

        filteredTodos.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            
            todoItem.innerHTML = `
                <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} 
                       onchange="app.toggleTodo(${todo.id})">
                <div class="todo-content">
                    <div class="todo-text">${todo.text}</div>
                    <div class="todo-meta">
                        <span class="category-tag">${this.getCategoryIcon(todo.category)} ${todo.category}</span>
                        <span class="priority-tag priority-${todo.priority}">${todo.priority.toUpperCase()}</span>
                        <span class="todo-date">📅 ${todo.createdAt}</span>
                    </div>
                </div>
                <div class="todo-actions">
                    <button class="action-btn edit-btn" onclick="app.editTodo(${todo.id})">✏️</button>
                    <button class="action-btn delete-btn" onclick="app.deleteTodo(${todo.id})">🗑️</button>
                </div>
            `;

            todoList.appendChild(todoItem);
        });
    }

    getCategoryIcon(category) {
        const icons = {
            work: '🏢',
            personal: '🏠',
            health: '💪',
            learning: '📚',
            finance: '💰'
        };
        return icons[category] || '📝';
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const pending = total - completed;
        const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('pendingTasks').textContent = pending;
        document.getElementById('completionRate').textContent = `${completionRate}%`;
        document.getElementById('progressFill').style.width = `${completionRate}%`;
    }
}

// Initialize the app when the DOM is loaded
const app = new TodoApp();
let clients = [
    {id: 1, name: 'Anna Lee', email: 'anna@example.com', status: 'active'},
    {id: 2, name: 'Alexander Born', email: 'alexander@example.com', status: 'active'},
    {id: 3, name: 'Morgan Freeman', email: 'morgan@example.com', status: 'inactive'},
];

const STATUS_LABELS = { active: "Active", inactive: "Inactive" };

function renderClients() {
    const tbody = document.querySelector('.clients-table tbody');
    tbody.replaceChildren();
    for (const client of clients) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = client.name;
        row.append(nameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = client.email;
        row.append(emailCell);

        const statusCell = document.createElement('td');
        const badge = document.createElement('span');
        badge.classList.add('status', `status-${client.status}`);
        badge.textContent = STATUS_LABELS[client.status];
        statusCell.append(badge);
        row.append(statusCell);


        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            clients = clients.filter(item => item.id !== client.id);
            renderClients();
        });
        deleteCell.append(deleteButton);
        row.append(deleteCell);

        tbody.append(row);
    }
}
renderClients();

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#client-name').value.trim();
    const email = document.querySelector('#client-email').value.trim();
    const status = document.querySelector('#client-status').value;

    const newClient = {id: Date.now(), name, email, status};

    clients.push(newClient);
    renderClients();
    form.reset();
});
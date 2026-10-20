const clients = [
    {name: 'Anna Lee', email: 'anna@example.com', status: 'active'},
    {name: 'Alexander Born', email: 'alexander@example.com', status: 'active'},
    {name: 'Morgan Freeman', email: 'morgan@example.com', status: 'inactive'},
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
        tbody.append(row);
    }
}
renderClients();

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#client-name').value;
    const email = document.querySelector('#client-email').value;
    const status = document.querySelector('#client-status').value;

    const newClient = {name, email, status};
    clients.push(newClient);
    renderClients();
    form.reset();
});
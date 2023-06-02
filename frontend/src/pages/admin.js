import React from 'react'

const Admin = () => {

    const fetchSubscribers = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/api/fetchSubscribers')
            .then(response => response.json())
            .then(data => {
                const list = document.createElement('ul');
                data.data.forEach(subscriber => {
                    const listItem = document.createElement('li');
                    listItem.textContent = subscriber.email;
                    list.appendChild(listItem);
                })
                const subscribersList = document.getElementById('subscribersList');
                subscribersList.innerHTML = '';
                subscribersList.appendChild(list);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const fetchJoinees = event => {
        event.preventDefault();
        fetch('http://localhost:5000/api/fetchJoinees')
            .then(response => response.json())
            .then(data => {
                const table = document.createElement('table');
                table.className = 'joinees-table';
                const headerRow = document.createElement('tr');
                ['First Name', 'Last Name', 'Email', 'Phone Number', 'Education', 'Course', 'Address', 'Locality', 'State', 'Pincode'].forEach(headerText => {
                    const header = document.createElement('th');
                    header.textContent = headerText;
                    headerRow.appendChild(header);
                });
                table.appendChild(headerRow);
                data.data.forEach(joinee => {
                        const row = document.createElement('tr');
                        Object.values(joinee)
                            .slice(1, -1)
                            .forEach(text => {
                                const cell = document.createElement('td');
                                cell.textContent = text;
                                row.appendChild(cell);
                        });
                    table.appendChild(row);
                });
                    const joineesList = document.getElementById('joineesList');
                    joineesList.innerHTML = '';
                    joineesList.appendChild(table);
            })
            .catch(error => {
                console.log(error);
            });
    };
    
    const fetchQueries = event => {
        event.preventDefault();
        fetch('http://localhost:5000/api/fetchQueries')
            .then(response => response.json())
            .then(data => {
                const table = document.createElement('table');
                table.className = 'queries-table';
                const headerRow = document.createElement('tr');
                ['Name', 'Email', 'Subject', 'Message'].forEach(headerText => {
                    const header = document.createElement('th');
                    header.textContent = headerText;
                    headerRow.appendChild(header);
                });
                table.appendChild(headerRow);
                data.data.forEach(query => {
                    const row = document.createElement('tr');
                    Object.values(query)
                        .slice(1, -1)
                        .forEach(text => {
                            const cell = document.createElement('td');
                            cell.textContent = text;
                            row.appendChild(cell);
                        });
                    table.appendChild(row);
                });
                const queriesList = document.getElementById('queriesList');
                queriesList.innerHTML = '';
                queriesList.appendChild(table);
            })
            .catch(error => {
                console.log(error);
            });
    };
    
    const fetchSignUps = event => {
        event.preventDefault();
        fetch('http://localhost:5000/api/fetchSignUps')
            .then(response => response.json())
            .then(data => {
                const table = document.createElement('table');
                table.className = 'sign-ups-table';
                const headerRow = document.createElement('tr');
                ['Name', 'Email', 'Course'].forEach(headerText => {
                    const header = document.createElement('th');
                    header.textContent = headerText;
                    headerRow.appendChild(header);
                });
                table.appendChild(headerRow);
                data.data.forEach(signUp => {
                    const row = document.createElement('tr');
                    Object.values(signUp)
                        .slice(1, -1)    
                        .forEach(text => {
                            const cell = document.createElement('td');
                            cell.textContent = text;
                            row.appendChild(cell);
                        });
                        table.appendChild(row);
                    });
                const signUpsList = document.getElementById('signUpList');
                signUpsList.innerHTML = '';
                signUpsList.appendChild(table);
            })
            .catch(error => {
                console.log(error);
            });
    };

  return (
    <>
        {/* Topbar Start */}
            <div className="admin-topbar bg-white shadow-sm">
                <div className="row justify-content-center align-items-center py-4 px-xl-5">
                    <a href="" className="text-decoration-none">
                            <h1>
                                ADMINSTRATOR
                            </h1>
                    </a>
                </div>
            </div>  
        {/* Topbar End */}    

        {/* Newsletter Subscriber list */}
            <div className="col-lg-7 mt-4">
                <a href="" className="text-decoration-none">
                    <h3 className="">Newsletter Subscriber List</h3>
                    <button onClick={fetchSubscribers} className='btn btn-secondary'>Fetch Subscribers</button>
                    <div id='subscribersList'></div>
                </a>
            </div>

        {/* Joiners List */}
            <div className="col-lg-7 mt-4">
                <a href="" className="text-decoration-none">
                    <h3 className="">Joiners List</h3>
                    <button onClick={fetchJoinees} className='btn btn-secondary'>Fetch Joinees</button>
                    <div id='joineesList'></div>
                </a>
            </div>

        {/* Query List */}
            <div className="col-lg-7 mt-4">
                <a href="" className="text-decoration-none">
                    <h3 className="">Contact Query List</h3>
                    <button onClick={fetchQueries} className='btn btn-secondary'>Fetch Queries</button>
                    <div id='queriesList'></div>
                </a>
            </div>

        {/* Sign Up List */}
            <div className="col-lg-7 mt-4">
                <a href="" className="text-decoration-none">
                    <h3 className="">Sign Up List</h3>
                    <button onClick={fetchSignUps} className='btn btn-secondary'>Fetch Sign Ups</button>
                    <div id='signUpList'></div>
                </a>
            </div>

    </>
  )
}

export default Admin
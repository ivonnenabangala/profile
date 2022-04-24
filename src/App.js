import React, {useState, useEffect} from 'react'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const App = () => {
  
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => {
      return Response.json()
    })

    .then(data => {
      setUsers(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (

    <div className="App">
      <div className='row'>
          {users.map(user => (
            
            <div className="col-xs-14 col-sm-14 col-md-6 col-lg-5">
            <div className='card'>
              <div className="card-content">
                <h1 key={user.id} style={{textAlign: "center"}}>{user.name}</h1> <br></br>
                <h3 style={{textAlign: "center"}}>General Info</h3>
                <table>
                <tbody>
												<tr>
													<th scope="row">Username</th>
													<td>{user.username} </td>
												</tr>
												<tr>
													<th scope="row">Email</th>
													<td>
														{user.email}
													</td>
												</tr>
												<tr>
													<th scope="row">Address</th>
													<td>
                          {user.address.street}, {user.address.suite}, {user.address.city},
                          {user.address.zipcode}, lat;{user.address.geo.lat}, lng;{user.address.geo.lng}
                          </td>
												</tr>
												<tr>
													<th scope="row">website</th>
													<td>{user.website} </td>
												</tr>
                        <tr>
													<th scope="row">Company name</th>
													<td>{user.company.name} </td>
												</tr>
                        <tr>
													<th scope="row">Company catch phrase</th>
													<td>{user.company.catchPhrase} </td>
												</tr>
                        <tr>
													<th scope="row">Company bs</th>
													<td>{user.company.bs} </td>
												</tr>
											</tbody>
                  
                </table>
                {/* <p key={user.id}>Username: {user.username}</p>
                <p key={user.id}>Email: {user.email}</p>
                <p key={user.id}>
                  Address: {user.address.street}, {user.address.suite}, {user.address.city},
                  {user.address.zipcode}, lat;{user.address.geo.lat}, lng;{user.address.geo.lng}</p>
                <p key={user.id}>Phone: {user.phone}</p>
                <p key={user.id}>website: {user.website}</p>
                <h4>Company</h4>
                <p key={user.id}>
                  Company Name: {user.company.name} <br></br>
                  Company catch phrase: {user.company.catchPhrase} <br></br>
                  Company bs: {user.company.bs}
                </p> */}


              </div>
              </div>
            </div>

          ))}
       </div> 
      
    </div>
  );
}

export default App

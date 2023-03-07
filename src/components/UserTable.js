// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';

// export const UserTable = () => {

//     const [data, setData] = useState([])

//     useEffect(() => {
//         loadAllUsers()
//     }, [])

//     const loadAllUsers = async () => {
//         return await axios.get('http://localhost:8000/users')
//             .then((res) => {
//                 setData(res.data)
//             })
//             .catch((err) => {
//                 console.error(err);
//             })
//     }

//     return (
//         <MDBContainer>
//             <MDBRow>
//                 <MDBCol>
//                     <MDBTable className='mt-50'>
//                         <MDBTableHead style={{ background: '#E5B404', width: '100%' }}>
//                             <tr>
//                                 <th scope='col'>Campaign Name</th>
//                                 <th scope='col'>Status</th>
//                                 <th scope='col'>Audience</th>
//                                 <th scope='col'>Launch Date</th>
//                                 <th scope='col'>Last Modified</th>
//                             </tr>
//                         </MDBTableHead>
//                         {data.length === 0 ? (
//                             <MDBTableBody className='align-center mb-0'>
//                                 <tr>
//                                     <td>No Campaign Found</td>
//                                 </tr>
//                             </MDBTableBody>
//                         ) : (
//                             data.map((item, index) => (
//                                 <MDBTableBody key={index}>
//                                     <tr>
//                                         <td>{item.first_name}</td>
//                                         <td>{item.last_name}</td>
//                                         <td>{item.email}</td>
//                                         <td>{item.date_and_time}</td>
//                                         <td>{item.modified}</td>
//                                     </tr>
//                                 </MDBTableBody>
//                             ))
//                         )}
//                     </MDBTable>
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     )
// }

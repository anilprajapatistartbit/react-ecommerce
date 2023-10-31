import {useEffect,useState} from 'react';
//import PieChart from './PieChart';
import Sidebar from '../../common/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useParams ,useNavigate ,Link} from 'react-router-dom';
 
const Dashboard = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
      setDate(newDate);
    };
   const[record,setRecord] = useState([])
 
//    const getData = () =>
//    {
//        fetch('https://jsonplaceholder.typicode.com/users')
//        .then(resposne=> resposne.json())
//        .then(res=>setRecord(res))
//    }
 
//    useEffect(() => {
//       getData();
//    },)
    
 
    return (<>
        <div>
        <div className="main-banner inner" id="home">   
           </div>
           <ol className="breadcrumb">
            <li className="breadcrumb-item">
              
               <Link to="/Admin" >DASHBOARD</Link>
            </li>
            
           </ol>
            {/**/}
          </div>
    <div class="row">  
        <Sidebar/>
       <div class="col-md-9 col-lg-9">
        <p class="lead d-none d-sm-block">Add Product Details and Orders</p>
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Users</h6>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Posts</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Tweets</h6>
                        <h1 class="display-4">125</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Shares</h6>
                        <h1 class="display-4">36</h1>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="row mb-5">
            <div class="col-lg-7 col-md-6 col-sm-12">
                
              {/* <h5 class="mt-3 mb-3 text-secondary">
               Check More Records of Employees
              </h5>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Label</th>
                                <th>Header</th>
                                <th>Column</th>
                                <th>Record Data</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div> */}
            </div>
             <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
             <h5 class="mt-3 mb-3 text-secondary">
               Check Date in Dashboard Calendar
              </h5>
              <Calendar value={date} onChange={handleDateChange} />
            </div> 
        </div>
       </div>
</div>
    </> )
}
 
export default Dashboard
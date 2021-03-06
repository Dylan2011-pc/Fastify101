import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from 'react-datepicker'
import Cookies from 'js-cookie'
import Slibar from '../slibar/slibar.js'
import './listdevicemuon.css'
import { Button ,Modal ,Form } from "react-bootstrap";
import moment from 'moment';
function ListDeviceMuon() {
    
    const token =  Cookies.get('cookielogin')
    const [show1, setShow1] = useState(false);
    const [valuem , setvaluem] =useState(1)
    const [datetra ,setdatetra  ] = useState(false);
    const [listdevice , setlistdivice] =useState(null)
    const [calllist ,setcalllist ] =useState(false);
    const [id,setid] = useState(false);
    const handleClose1 = () => setShow1(false);
    const getTimemuon = (e)=>{
      const TimeChange = moment(e).format('YYYY-MM-DD');
       setdatetra(TimeChange)
       
      }
      const setdatadevicem =(e)=>{
        setvaluem(e.target.value)
      }
      const handleShow1 = (id1) =>{
        setShow1(true)
        setid(id1)
       }
      
       useEffect(async()=>{
      
        await axios.get("http://localhost:5000/api/listdevicem" ).then((res)=>{

       setlistdivice(res.data.msg)    
      }).catch(err=>{
        toast.error(err.response.data.msg)
   
      })
      },[calllist])
    

      const Sendnumberdevicem = async()=>{
        const datamuon={
          numberm:valuem ,
          id:id,
          timetra: datetra
        }
        const config = {
          'Content-Type': 'application/json',
        }
        console.log(datamuon)
        await axios.post("http://localhost:5000/api/devicemuonchoduyet" , datamuon , {headers: {Authorization: `Bearer ${token}` }} ,config  ).then((res)=>{
          setcalllist(!calllist)
          setShow1(false)
          setvaluem(1)
          setdatetra(false)
          toast.success(res.data.message)
        }).catch(err=>{

          if(err.response.data.message ==="errnumber"){
            return  toast.error(err.response.data.payload)
            }

          if(err.response.data.message ==="errtime"){
            return  toast.error(err.response.data.payload)
            }else { 
            JSON.parse(err.response.data.message).map(data=>{
              toast.error(data.message)
            })
          }
        })
       }

return ( 
<div className="ListUser">
<Slibar/>
<ToastContainer
position="top-right"
autoClose={3000}
closeOnClick/>
   <div className="main-content">
        <header>
            <div className="social-icons">
                <span className="ti-bell"></span>
                <div></div>
            </div>
        </header>
        
        <div className="listdevicemuon">
        <table>
        <h2>Danh s??ch c??c thi???t b??? c??ng ty c?? m?????n ???????c</h2>

<tr>
    <th>STT</th>
    <th>Name Device</th>
    <th>Image</th>
    <th>Number  Devices </th>
    <th>Price Device (VN??)</th>
    <th>M?????n thi???t b???</th>
  </tr>
  {listdevice ===null ? "Loadding...." : listdevice.map((data1 ,index)=>{
     return( 

     <tr key={data1.id}>
    <td>{index}</td>
    <td>{data1.namedevice}</td>
    <td><img src={"http://localhost:5000/src/uploads/"+data1.imgdevice}  alt="" className="imgavatar"/></td>
    <td>{(data1.quantitydevice).toLocaleString()}</td>
    <td>{(data1.tienthietbi).toLocaleString()}</td>
    <td> <Button onClick={()=>handleShow1(data1.id )}>M?????n</Button> </td>
  
  </tr>     ) })
}


</table>
        </div>



        </div>

        <Modal show={show1} onHide={handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> M?????n Thi???t B???</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Group>
        <Form.Label>S??? L?????ng M?????n : </Form.Label>
        <Form.Control type="number" placeholder="So luong muon" value={valuem} min="1" name="device_quantity_m" onChange={setdatadevicem}/>
     </Form.Group>
     <Form.Group>
    <Form.Label>Th???i Gian Tr??? :   </Form.Label>
      
    <DatePicker value={datetra} onChange={getTimemuon} />
      
       </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={Sendnumberdevicem}>
         Save
          </Button>
        </Modal.Footer>
      </Modal>

        
        </div>
    )}
export default ListDeviceMuon
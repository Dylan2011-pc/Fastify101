import React ,{useState ,useRef} from 'react'
import {Link} from 'react-router-dom'
import Slibar from '../slibar/slibar.js'
import { Button ,Modal ,Form } from "react-bootstrap";
import './listdevicechoduyet.css'
import Chat from '../GroupChat/Chat.js';
function ListDeviceChoDuyet() {

    const [show, setShow] = useState(false);
    const [showcreatedevice ,setshowcreatedevice]  = useState(false);
    const targetupload = useRef(null)
    const [baseImage , setBaseImage] =useState({
        img:null
      })
    const [value_device , setvalue_device] = useState({
        device_name :'',
        device_quantity:'',
        giadevice:''
    })  
    const getdatadevice = (e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        setvalue_device({ ...value_device ,[name] : value })
        
    }
  
      const handleUpload  = (e)=>{
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            setBaseImage({img:reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
       }
    const handleShow  = ()=>{
      
        setShow(true)
      }


      const handleClose = () => setShow(false);
      const handleCreateDevice = ()=>{
        setshowcreatedevice(true)
      }
     
      const handleCloseCreate = ()=>{
        setshowcreatedevice(false)
      }



      const  sendData = async()=>{

      }

    return ( 
<div className="ListUser">
<Slibar/>

   <div className="main-content">
        <header>
            <div className="social-icons">
                <span className="ti-bell"></span>
                <div></div>
            </div>
        </header>
        
        <div className="listdevicemuon">
        <table>
        <Button className="buttoncreatedevice" onClick={()=>handleCreateDevice()} > Add Device  <span><i class="fa fa-plus" aria-hidden="true"></i></span></Button>
  <tr>
    <th>STT</th>
    <th>Name Device</th>
    <th>Image</th>
    <th>Number  Devices</th>
    <th>Price Device</th>
    <th>Edit Device</th>
    <th>Delete Device</th>
  </tr>
  <tr>
    <td>1</td>
    <td>M???nh C?????ng</td>
    <td>muadongyeuthuong3x@gmail.com</td>
    <td>gmail.com</td>
    <td>gmail.com</td>
    <td>  <Link to="/editdevice" >   <i className="fa fa-pencil" aria-hidden="true"> </i> </Link></td>
    <td><i class="fa fa-trash" aria-hidden="true" onClick={()=>handleShow()}></i></td>
  </tr>

</table>
        </div>
        </div>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>B???n c?? mu???n x??a thi???t b???  n??y kh??ng  ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
          Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showcreatedevice} onHide={handleCloseCreate} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Device </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicNamethietbi">
    <Form.Label>T??n thi???t b??? </Form.Label>
    <Form.Control type="text" placeholder="T??n thi???t b??? " name="device_name" value={value_device.device_name} onChange={getdatadevice}/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicSoluong">
    <Form.Label>S??? L?????ng </Form.Label>
    <Form.Control type="number" placeholder="So luong"  min="1" name="device_quantity" value={value_device.device_quantity}  onChange={getdatadevice}/>
   
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicimage">
    <Form.Label>???nh Thi???t B??? </Form.Label>
    <br />
  <div className="imguser" onClick={()=>targetupload.current.click()} > {baseImage.img ===null ? '': <img src={baseImage.img}  width="100" height="100"/>} </div> 
   <input ref={targetupload}  type="file"  onChange={(e)=>handleUpload(e)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicimage">
    <Form.Label>Gi?? thi???t b??? </Form.Label>
    <br/>
    <input type="number" name="giadevice" min="1" placeholder="VN??"  onChange={getdatadevice} value={value_device.giadevice}/> VN??
    <br />
    
  </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreate}>
            Close
          </Button>
          <Button variant="primary" onClick={sendData}>
        ?????ng ?? 
          </Button>
        </Modal.Footer>
      </Modal>
</div>


    )}
     

    export default ListDeviceChoDuyet
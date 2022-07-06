import Header from '../../components/header/header';
import MaterialTable from 'material-table';
import { useState, forwardRef, useEffect } from 'react';
// iconos
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { InputLabel, TextField, ToggleButton } from '@mui/material';
import { ToggleButtonGroup } from '@mui/material';
import { Button } from 'react-bootstrap';
import PaidIcon from '@mui/icons-material/Paid';
import VisibilityIcon from '@mui/icons-material/Visibility';

import API from '../../services/API';


function Users() {

    const [release, setNewRelease] = useState();
    const [userList, setUserList] = useState([]);
    const [prestamoList, setPrestamoList] = useState([]);
    const [inersionInfo, setInverisonInfo] = useState([])

    const [disableLoads, setDisableLoads] = useState(false);

    const [valueToggle, setValueToggle] = useState("Prestamos")
    const [show, setShow] = useState(true);


    useEffect( () => {
        //getVersion() descomentar para prod
        setNewRelease(true)
        getUsers()
        getPrestamos()
        getInversion()
    },[]);

    function getVersion() {
      API.getVersion().
      then(response => {
        setNewRelease(response.data.new_release) // value can true or false
      })
      .catch(err => {
        console.log(err)
      })
    }

    function getUsers() {
      API.getUsers()
      .then(response => {
        setUserList(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

    function getPrestamos() {
      API.getPrestamo()
      .then(response => {
        setPrestamoList(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

    function getInversion() {
      API.getInversion()
      .then(response => {
        setInverisonInfo(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

    // butons funcions
    function pay() {
      API.createPayment()
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

    function prestamosSimular() {
      API.populate()
      .then(res => {
        getPrestamos()
      })
      .catch(err => {
        console.log(err)
      })
    }

    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    async function sendLoad() {
      setDisableLoads(true)
      API.chargeInfo()
      await sleep(50000)
      API.chargeInfo()
      await sleep(50000)
      API.chargeInfo()
      await sleep(50000)
      API.chargeInfo()
      .then(res => {
        setDisableLoads(false)
      })
    }

    const [state, setState] = useState({
        columns: [ // columns users version 1
          { title: 'Name', field: 'nombre' },
          { title: 'Last name', field: 'apellido' },
          { title: 'User', field: 'username' },
          { title: 'Amount', field: 'monto_solicitado',},
        ],
        columnsPrestamo: [
          {title : 'User', field: 'usuario'},
          {title : 'Plazo', field: 'plazo'},
          {title : 'Interes', field: 'interes'},
          {title : 'Monto', field: 'monto'},
        ],
        /*data: [
          { name: 'Juan', user: 'Juanito123', amount: "2000", id: 63 }, 
          { name: 'Rick', user: 'ricknepe', amount: "30202", id: 23 }, 
          { name: 'Jazu', user: 'cat123', amount: "3093", id: 21 }, 
        ],*/
      });

      const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };

    

    

  return (
    <div>
      <Header
        version={release === true ? "2.0.0": "1.0.0"}
      />
      {release &&
        <ToggleButtonGroup
            color="primary"
            exclusive
            value={valueToggle}
            onChange={e => setValueToggle(e.target.value)}
        >
        
        <ToggleButton value="Prestamos">Prestamos</ToggleButton>
        <ToggleButton value="Inversiones">Inversiones</ToggleButton>
      </ToggleButtonGroup>



      }
      {!release &&
        <MaterialTable
        title={"Users"}
        data={userList}
        columns={state.columns}
        icons={tableIcons}
        />  
      }
      {(valueToggle === "Prestamos" && release) &&
        <div style={{display : "flex"}}>
            <div style={{width: "fit-content"}}>
              <MaterialTable
              title={"Prestamos"}
              data={prestamoList}
              columns={state.columnsPrestamo}
              icons={tableIcons}
              />
            </div>
            <div style={{width: "-webkit-fill-available"}}>
              <div style={{display: "grid", float: "right"}}>
                <Button onClick={() => sendLoad()} style={{height:"fit-content", margin: "4.5%", float:"right"}} disabled={disableLoads}>Simular Carga</Button>
                <Button onClick={() => prestamosSimular()} style={{height:"fit-content", margin: "4.5%", float:"right"}}>Simular Prestamos</Button>
                <Button onClick={() => pay()} style={{height:"fit-content", margin: "4.5%", float:"right"}}>Simular Pagos</Button>

              </div>
            </div>  
        </div>
      }
      {(valueToggle === "Inversiones" && release) &&
        <div>
            <div>
              <p>Monto recuperado: {inersionInfo.monto_recuperado}</p>
              <p>Monto Invertido: {inersionInfo.monto_inversion}</p>
            </div>
            <div>
                <TextField label="Monto a simular" type={"number"}   focused/>
                <Button style={{height:"fit-content", marginLeft: "2rem"}}>Simular Inversion</Button>
            </div>
            <div style={{display:"flex"}}>
                <div style={{width:"50%"}}>
                    <MaterialTable
                        title={"Users"}
                        data={userList}
                        columns={state.columns}
                        icons={tableIcons}
                    /> 
                </div>
                <div style={{width:"50%"}}>
                    <img style={{width:"30%", height: "40%", background:"whiteSmoke", position:"absolute", margin:"10%"}} hidden={!show}></img>
                    <VisibilityIcon style={{left:"60%", position:"absolute", bottom:"25%"}} onClick={ () => setShow(!show)} />
                </div>
            </div> 
        </div>
      }
    </div>
  );
}

export default Users;

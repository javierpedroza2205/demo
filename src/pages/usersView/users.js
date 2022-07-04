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
import { useFormControl } from '@mui/material/FormControl';
import { Button } from 'react-bootstrap';
import { Icon, Input, InputAdornment } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import PaidIcon from '@mui/icons-material/Paid';
import VisibilityIcon from '@mui/icons-material/Visibility';


function Users() {

    const [flagv2, setFlagv2] = useState(false);
    const [valueToggle, setValueToggle] = useState("Prestamos")
    const [show, setShow] = useState(true);


    useEffect( () => {
        setFlagv2(true)
    },[]);


    const [state, setState] = useState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'User', field: 'user' },
          { title: 'Amount', field: 'amount',},
          { title: 'ID', field: 'id',},
        ],
        data: [
          { name: 'Juan', user: 'Juanito123', amount: "2000", id: 63 }, 
          { name: 'Rick', user: 'ricknepe', amount: "30202", id: 23 }, 
          { name: 'Jazu', user: 'cat123', amount: "3093", id: 21 }, 
        ],
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
        version={"1.0.0"}
      />
      {flagv2 &&
        <ToggleButtonGroup
            color="primary"
            exclusive
            value={valueToggle}
            onChange={e => setValueToggle(e.target.value)}
        >
        
        <ToggleButton value="Prestamos">Prestamos</ToggleButton>
        <ToggleButton value="Inversiones">Inversiones</ToggleButton>
        <ToggleButton value="Configuracion">Configuracion</ToggleButton>
      </ToggleButtonGroup>



      }
      {!flagv2 &&
        <MaterialTable
        title={"Users"}
        data={state.data}
        columns={state.columns}
        icons={tableIcons}
        />  
      }
      {valueToggle === "Prestamos" &&
        <div>
            Prestamos segment
        </div>
      }
      {valueToggle === "Inversiones" &&
        <div>
            <div>
                <TextField label="Monto a simular" type={"number"} style={{margin: "5%"}} focused/>
                <Button style={{height:"fit-content", margin: "4.5%", float:"right"}}>Simular Inversion</Button>

            </div>
            <br/>
            <div style={{textAlign:"right"}}>
            <Input
                placeholder='Pesos'
                startAdornment={
                    <InputAdornment position='start'>
                        <PaidIcon />
                    </InputAdornment>
                }
            />
            </div>
            <div style={{display:"flex"}}>
                <div style={{width:"50%"}}>
                    <MaterialTable
                        title={"Users"}
                        data={state.data}
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
      {valueToggle === "Configuracion" &&
        <div>
            Configuracion segment
        </div>
      } 
    </div>
  );
}

export default Users;

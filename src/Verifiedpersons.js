import React, { useState, useEffect } from 'react';
import './Verifiedperson.css';
import axios from 'axios';

import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Column } from 'primereact/column';

const Verifiedpersons = (props) => {
    const [globalFilterValue, setGlobalFilterValue] = useState('');
     const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
         'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
         'representative': { value: null, matchMode: FilterMatchMode.IN },
         'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
         'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
     });
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);

   
   
    const getData = async () => {
    const data = await axios.get(`http://localhost:5000/api/users`);  
       var filteredDt = data.data.filter(x => x.Type == "needy")

    setProducts(filteredDt);
    };
    
    useEffect(() => {
    
      getData()
    
     }, []);
    



    const renderHeader = () => {
             <div className="flex justify-content-between  align-items-center">
                 <span className="p-input-icon-left">
                     <i className="pi pi-search" />
                     <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
        </div>
         
     }
    const onGlobalFilterChange = (e) => {
         const value = e.target.value;
       let _filters = { ...filters };
        _filters['global'].value = value;

       setFilters(_filters);
     setGlobalFilterValue(value);
 }

    const header = renderHeader();

    const closeDialog = () => {

      setOpen(false)
      props.closeModal()
    }
    return (

        <div className="dataview-demo2 white">
            
                <DataTable value={products} paginator className="p-datatable-customers" rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10, 25, 50]}
                 dataKey="id" rowHover
                 filters={filters} filterDisplay="menu" responsiveLayout="scroll"
                  globalFilterFields={['name']} emptyMessage="No Data found."
               currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">


                    <Column field="name" header="Name" sortable style={{ minWidth: '9rem' }} />
                    <Column field="email" header="Email" sortable style={{ minWidth: '9rem' }} />
                   
                    <Column field="Country" header="Country" sortable style={{ minWidth: '9rem' }} />
                    <Column field="City" header="City" sortable style={{ minWidth: '9rem' }} />
                    <Column field="TotalNeeds" header="TotalNeeds" sortable style={{ minWidth: '9rem' }} />

                    <Column field="Address" header="Address" sortable style={{ minWidth: '9rem' }} />
                    <Column field="WhatYouWant" header="Comment" sortable style={{ minWidth: '9rem' }} />
                    

                </DataTable>
            
        </div>
    );
}

export default Verifiedpersons;



























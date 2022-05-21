import React from "react";
import "./Table.css";
import { students } from "./obj";

class Table extends React.Component
{
  constructor ( props )
  {
    super( props );
    this.state = {
      students,
      name: "",
      age: "",
      address: "",
      nicname: "",
      status: "",
      hobby: "",
      disabled: true,
      selected: {},
    };
  }
  render ()
  {
    //// DELETE FUNCTION
    const onDelete = ( id ) =>
    {
      let res = this.state.students.filter( ( val ) => val?.id !== id );
      this.setState( { students: res } );
    };

    //// SEARCH FUNCTION
    const onFilter = ( { target } ) =>
    {
      let { value, name } = target;
      if ( value )
      {
        let res = students.filter( ( item ) =>
          `${ item[ name ] }`.toLowerCase().includes( `${ value }`.toLowerCase() )
        );
        this.setState( { students: res } );
      } else
      {
        this.setState( { students } );
      }
    };

    //// onSelected FUNCTION
    const onSelected = ( item ) =>
    {
      this.setState( { selected: item, ...item } );
    };

    //// onDisebled FUNCTION
    const onDisebled = ( id ) =>
    {
      return this.state.selected?.id !== id;
    };

    //// Generik onChange FUNCTION
    const onChange = ( { target } ) =>
    {
      const { value, name } = target;
      this.setState( { [ name ]: value } );
    };

    //// onSave FUNCTION
    const onSave = () =>
    {
      let res = this.state.students.map( ( val ) =>
      {
        return this.state.selected?.id === val.id
          ? {
            ...val,
            name: this.state.name,
            age: this.state.age,
            address: this.state.address,
            nicname: this.state.nicname,
            status: this.state.status,
            hobby: this.state.hobby,
          }
          : val;
      } );
      this.setState( { students: res, selected: null } );
    };

    //// onCansel FUNCTION
    const onCansel = () =>
    {
      let res = this.state.students.map( ( val ) =>
      {
        return this.state.selected?.id === val.id
          ? {
            ...val,
            name: this.state.selected.name,
            age: this.state.selected.age,
            address: this.state.selected.address,
            nicname: this.state.selected.nicname,
            status: this.state.selected.status,
            hobby: this.state.selected.hobby,
          }
          : val;
      } );
      this.setState( { students: res, selected: null } );
    };

    return (
      <div className="container">
        <div className="inp-wrapper">
        <input
          className="inp"
          onChange={ onFilter }
          type="number"
          name="id"
          placeholder="Id"
        />
        <input
          className="inp"
          onChange={ onFilter }
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="inp"
          onChange={ onFilter }
          type="number"
          name="age"
          placeholder="Age"
        />
        </div>

        <div className="table-content">
          <table width={ "100%" }>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Status</th>
                <th>Nicname</th>
                <th>Hobby</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              { this.state.students.map( ( item ) =>
              {
                let { id, name, age, address, status, nicname, hobby } = item;
                return (
                  <tr key={ id }>
                    <td className="disTd" style={ { width: "50px" } }>
                      <input
                        className="disInp"
                        style={ { width: "50px" } }
                        disabled={ true }
                        type="text"
                        value={ id }
                      />
                    </td>
                    <td className="disTd">
                      <input
                        className="disInp"
                        onChange={ onChange }
                        disabled={ onDisebled( id ) }
                        type="text"
                        value={ onDisebled( id ) ? name : this.state.name }
                        name="name"
                      />
                    </td>
                    <td className="disTd">
                      <input
                        className="disInp"
                        onChange={ onChange }
                        disabled={ onDisebled( id ) }
                        type="text"
                        value={ onDisebled( id ) ? age : this.state.age }
                        name="age"
                      />
                    </td>
                    <td className="disTd">
                      <input
                        className="disInp"
                        onChange={ onChange }
                        disabled={ onDisebled( id ) }
                        type="text"
                        value={ onDisebled( id ) ? address : this.state.address }
                        name="address"
                      />
                    </td>
                    <td className="disTd">
                      <input
                        className="disInp"
                        onChange={ onChange }
                        disabled={ onDisebled( id ) }
                        type="text"
                        value={ onDisebled( id ) ? status : this.state.status }
                        name="status"
                      />
                    </td>
                    <td className="disTd">
                      <input
                        className="disInp"
                        onChange={ onChange }
                        disabled={ onDisebled( id ) }
                        type="text"
                        value={ onDisebled( id ) ? nicname : this.state.nicname }
                        name="nicname"
                      />
                    </td>
                    <td className="disTd">
                      <input
                        className="disInp"
                        onChange={ onChange }
                        disabled={ onDisebled( id ) }
                        type="text"
                        value={ onDisebled( id ) ? hobby : this.state.hobby }
                        name="hobby"
                      />
                    </td>
                    { onDisebled( id ) ? (
                      <>
                        <td className="btn-wrapper">
                          <button
                            className="btn delBtn"
                            onClick={ () => onDelete( id ) }
                          >
                            delete
                          </button>
                        </td>

                        <td>
                          <button
                            className="btn editBtn"
                            onClick={ () => onSelected( item ) }
                          >
                            Edit
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="btn-wrapper">
                          <button
                            className="btn cancelBtn"
                            onClick={ () => onCansel() }
                          >
                            Cansel
                          </button>
                        </td>
                        <td className="btn-wrapper">
                          <button
                            className="btn saveBtn"
                            onClick={ () => onSave() }
                          >
                            Save
                          </button>
                        </td>
                      </>
                    ) }
                  </tr>
                );
              } ) }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;

import React, { useState } from 'react';
import axios from 'axios';

const LibraryComponent = (props) => {

    //List Libraries
    const [librariesList, setLibrariesList] = useState(
        [
        {id:1, name: 'Library 1', address:'Address 1', phone:'514651584'},
        { id: 2, name: 'Library 2', address: 'Address 2', phone: '458541555' },
        ]
    );

    //Search
    const [searchParameterName, setSearchParameterName] = useState('');
    const handleInputChange = (event) => {
        setSearchParameterName(event.target.value.toString());
    }
    const searchItems = () => {
        let URL = searchParameterName !== "" ? ("https://localhost:7183/Library/Search?prName=" + searchParameterName) : "https://localhost:7183/Library/GetAll";
        axios.get(URL).then(response => {
            response.data.map(item => { item.isEditing = false;})
            setLibrariesList(response.data);
        })
    }

    //Update
    const handleLibraryInputChange = (prLibrary, prInput) => {
        let librariesNewReference = [...librariesList]; //Creat a copy of the object with new reference (new space in memory)
        const index = librariesNewReference.findIndex((item) => item.name == prLibrary.name);
        const { name, value } = prInput.target; //Get the name and value of the property changed
        librariesNewReference[index] = { ...prLibrary, [name]: value }; //Update just the specific property keeping the orhers
        setLibrariesList(librariesNewReference);
    }

    const updateEditingStatus = (prLibrary, prFlag) => {
        let librariesNewReference = [...librariesList]; //Creat a copy of the object with new reference (new space in memory)
        const index = librariesNewReference.findIndex((item) => item.name == prLibrary.name);
        librariesNewReference[index].isEditing = prFlag;
        setLibrariesList(librariesNewReference);
    }

    const confirmUpdate = (prLibrary) => {
        axios.put("https://localhost:7183/api/Library/Update", prLibrary).then(response => {
            let librariesNewReference = [...librariesList]; //Creat a copy of the object with new reference (new space in memory)
            const index = librariesNewReference.findIndex((item) => item.name == prLibrary.name);
            librariesNewReference[index] = prLibrary;
            librariesNewReference[index].isEditing = false;
            setLibrariesList(librariesNewReference);
        })
    }
  
    //Insert

    const [libraryToAdd, setLibraryToAdd] = useState({ name: '', address: '', phone: '' });
    const handleLibraryToAddInputChange = (prInput) => {
        const { name, value } = prInput.target;
        let libraryToAddNewReference = { ...libraryToAdd, [name]: value };
        setLibraryToAdd(libraryToAddNewReference);
    }

    const confirmNewLibrary = () => {
        axios.post("https://localhost:7183/api/Library/Save", libraryToAdd).then(response => {
            let librariesNewReference = [...librariesList]; 
            librariesNewReference.push(response.data);
            setLibrariesList(librariesNewReference);
            setLibraryToAdd({ name: '', address: '', phone: '' });// Clear the state
        });
    }

    //Delete Library
    const deleteLibrary = (prLibrary) => {
        axios.delete("https://localhost:7183/api/Library/Delete", { data: prLibrary }).then(response => {
            let librariesNewReference = [...librariesList];
            const index = librariesNewReference.findIndex((item) => item.name == prLibrary.name);
            librariesNewReference.splice(index, 1); //Remove item form list
            setLibrariesList(librariesNewReference);
        });
    }


    return (
        <div>
            <hr />
            <h2>Library</h2>
            <br />
            <div className="row">
                {/*Shearch Library*/}
                <div className="col-md-4">
                    <div className="card border border-secondary shadow-0">
                        <div className="card-header bg-secondary text-white"><b>Search</b> Library <span className="glyphicon glyphicon-saerch"></span></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-7">
                                    <lable className="form-label">Name</lable>
                                    <input className="form-control" placeholder="Enter name" name="name" type="text" value={searchParameterName} onChange={handleInputChange} />
                                </div>
                                <div className="col-md-5">
                                    <lable className="form-label">&nbsp;</lable>
                                    <div className="btn-toolbar">
                                        <button type="button" className="btn btn-primary form-control" onClick={searchItems.bind(this)}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                {/*New Library*/}
                <div className="col-md-8">
                    <div className="card border border-secondary shadow-0">
                        <div className="card-header bg-secondary text-white"><b>New</b> Library</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <lable className="form-lable">Name</lable>
                                    <input className="form-control" placeholder="Enter Name" name="name" value={libraryToAdd.name} onChange={handleLibraryToAddInputChange.bind(this)} type="text"/>
                                </div>
                                <div className="col-md-4">
                                    <lable className="form-lable">Address</lable>
                                    <input className="form-control" placeholder="Enter Address" name="address" value={libraryToAdd.address} onChange={handleLibraryToAddInputChange.bind(this)} type="text" />
                                </div>
                                <div className="col-md-3">
                                    <lable className="form-lable">Phone</lable>
                                    <input className="form-control" placeholder="Enter Phone" name="phone" value={libraryToAdd.phone} onChange={handleLibraryToAddInputChange.bind(this)} type="number" />
                                </div>
                                <div className="col-md-2">
                                    <lable className="form-lable">&nbsp;</lable>
                                    <button type="button" className="btn btn-success form-control" onClick={confirmNewLibrary.bind(this)}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/*Display Library*/}
            <div className="card border border-secondary shadow-0">
                <div className="card-header bg-secondary text-white"><b>Display</b> Libraries</div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {librariesList.map(item => 
                                <tr key={item.name}>
                                    <td><input className="form-control" value={item.name} onChange={handleLibraryInputChange.bind(this, item)} name="name" disabled={!item.isEditing} /></td>
                                    <td><input className="form-control" value={item.address} onChange={handleLibraryInputChange.bind(this, item)} name="address" disabled={!item.isEditing} /></td>
                                    <td><input className="form-control" value={item.phone} onChange={handleLibraryInputChange.bind(this, item)} name="phone" disabled={!item.isEditing} /></td>
                                    <td>
                                        <div className="btn-toolbar">
                                            <button type="button" className="btn btn-info mr-2" onClick={updateEditingStatus.bind(this, item, true)} style={{ display: item.isEditing ? 'none' : 'block', margin: 5 }} >Edit</button>
                                            <button type="button" className="btn btn-warning mr-2" onClick={updateEditingStatus.bind(this, item, false)} style={{ display: item.isEditing ? 'block' : 'none'}}>Cancel</button>
                                            <button type="button" className="btn btn-success mr-2" onClick={confirmUpdate.bind(this, item)} style={{ display: item.isEditing ? 'block' : 'none'}}>Save</button>
                                            <button type="button" className="btn btn-danger mr-2" onClick={deleteLibrary.bind(this, item)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
}

export default LibraryComponent;
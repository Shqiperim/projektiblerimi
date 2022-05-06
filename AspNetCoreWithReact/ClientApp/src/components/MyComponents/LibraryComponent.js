import React from 'react';
import axios from 'axios';

const LibraryComponent = (props) => {
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
                                    <input className="form-control" placeholder="Enter name" name="name" type="text"/>
                                </div>
                                <div className="col-md-5">
                                    <lable className="form-label">&nbsp;</lable>
                                    <div className="btn-toolbar">
                                        <button type="button" className="btn btn-primary form-control">Search</button>
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
                                    <input className="form-control" placeholder="Enter Name" name="name" type="text"/>
                                </div>
                                <div className="col-md-4">
                                    <lable className="form-lable">Address</lable>
                                    <input className="form-control" placeholder="Enter Address" name="address" type="text" />
                                </div>
                                <div className="col-md-3">
                                    <lable className="form-lable">Phone</lable>
                                    <input className="form-control" placeholder="Enter Phone" name="phone" type="number" />
                                </div>
                                <div className="col-md-2">
                                    <lable className="form-lable">&nbsp;</lable>
                                    <button type="button" className="btn btn-success form-control">Save</button>
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input className="form-control" type="text" value="Name"/></td>
                                <td><input className="form-control" type="text" value="Address"/></td>
                                <td><input className="form-control" type="text" value="Phone"/></td>
                                <td>
                                    <div className="btn-toolbar">
                                        <button className="btn btn-info mr-2">Edit</button>
                                        <button className="btn btn-success mr-2">Save</button>
                                        <button className="btn btn-danger mr-2">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
}

export default LibraryComponent;
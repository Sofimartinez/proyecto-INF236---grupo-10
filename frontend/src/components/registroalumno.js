import React from "react";

import {Form} from 'react-bootstrap';

function registro(){
    return(
        <Form>
            <div>hola</div>
            <label for="exampleDataList" classname="form-label">Datalist example</label>
            <input classname="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
            <datalist id="datalistOptions">
                <option value="San Francisco"/>
                <option value="New York"/>
                <option value="Seattle"/>
                <option value="Los Angeles"/>
                <option value="Chicago"/>
            </datalist>
        </Form>
    );
}

export default registro;
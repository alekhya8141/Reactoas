import React, {Component} from 'react';
import AddressService from"../../service/AddressService";

class Address extends Component
{
     constructor(props)
     {
         super(props)
         this.state={
             address: []
         }
         this.addAddress =this.addAddress.bind(this);
         this.updateAddress=this.updateAddress.bind(this);
         
     }

componentDidMount(){
    AddressService.getAddress().then((res)=>{
    this.setState({address: res.data});
    
});
}
addAddress(){
  this.props.history.push('/add-address');
}
getAddressId(addressId){
  this.props.history.push(`/get-addressId/${addressId}`);
}
updateAddress(addressId){
  this.props.history.push(`/update-address/${addressId}`);
}
deleteAddressById = (addressId) => {
  console.log("Delete Address with id: " + addressId);
  const address = this.state.address.filter(
    (address) => address.addressId !== addressId
  );
  this.setState({ address });
  AddressService.deleteAddressById (addressId);
};

goback(){
  this.props.history.push('/ahome');
}

      render() {
        return (
          <div>
            <h2 classname="text-center">Address</h2>
            <div className="row">
            <button type="button" class="btn btn-sm btn-info" onClick={this.addAddress}>Add Address</button>
            <table className="table table-mt-7">
              <thead>
                <tr>
                  <th>AddressId</th>
                  <th>City</th>
                  <th>District</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Zipcode</th>
                  <th>Landmark</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                      this.state.address.map(
                          address =>
                          <tr key={address.addressId}>
                            <td>{address.addressId}</td>
                              <td>{address.city}</td>
                              <td>{address.district}</td>
                              <td>{address.state}</td>
                              <td>{address.country}</td>
                              <td>{address.zipcode}</td>
                              <td>{address.landmark}</td>
                              <td>
                              <i style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.getAddressId(address.addressId)} className="fa fa-eye"/>
                    <i style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.deleteAddressById(address.addressId)} className="fa fa-trash"/>
                    <i style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.updateAddress(address.addressId)} className="fa fa-edit"/>
                              </td>
                              </tr>

                      )
                      }
                  </tbody>
                  </table>
                  <button className="btn btn-info size-lg" onClick={this.goback.bind(this)}><i className="fa fa-arrow-left "></i></button>
                  </div>
                  </div>
                  
        )}}

export default Address;
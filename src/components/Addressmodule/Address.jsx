import React, {Component} from 'react';
import AddressService from"../../services/AddressService";

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

      render() {
        return (
          <div>
            <h2 classname="text-center">address</h2>
            <div className="row">
            <button type="button" class="btn btn-sm btn-info" onClick={this.addAddress}>Add Address</button>
            <table className="table table-mt-7">
              <thead>
                <tr>
                  <th>addressId</th>
                  <th>city</th>
                  <th>district</th>
                  <th>state</th>
                  <th>country</th>
                  <th>zipcode</th>
                  <th>landmark</th>
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
                    onClick = { () => this.getAdmissionId(address.addressId)} className="fa fa-eye"/>
                    <i style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.deleteAdmissionById(address.addressId)} className="fa fa-trash"/>
                    <i style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.updateAdmission(address.addressId)} className="fa fa-edit"/>
                              </td>
                              </tr>

                      )
                      }
                  </tbody>
                  </table>
                  </div>
                  </div>
                  
        )}}

export default Address;
import {connect} from 'react-redux';
import HomeScreen from '../Components/Home';
import {addEvent} from '../service/Actions/actions';

const mapStateToProps=(state)=>
({
data:state
})

const mapDispatchToProps=(dispatch)=>
({
addEvent:(data)=>{dispatch(addEvent)}
})


export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);	
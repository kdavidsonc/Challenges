const Entry = (props) => {
	return ( 
	<div>
        <label htmlFor={props.name}>{props.label}</label> 
        <input id={props.name} type="text" />
      </div>
	  );
	  }

export default Entry;
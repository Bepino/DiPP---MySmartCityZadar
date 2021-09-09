import React from 'react';
import ReactDOM from 'react-dom'

class ActionPage extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        var text = 'pemis \n';
            var pemisCounter = 0;
            for(pemisCounter; pemisCounter<1000;pemisCounter++){
                text += 'pemis \n';
            }
            ReactDOM.render(<div>{text}</div>, document.getElementById('root'))
    }

    render(){ 
        
        return(
        <div id="main">
            <button onClick={this.handleClick()}></button>
        </div>
    )};
}
export default ActionPage;
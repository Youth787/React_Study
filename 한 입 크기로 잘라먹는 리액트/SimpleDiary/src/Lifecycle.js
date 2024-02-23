  import React, {useEffect, useState} from "react";

  const UnmountTest=()=>{
    
    useEffect(()=>{
        console.log("Mount!");
        return ()=>{
            //unmount 시점에 실행됨. 
            console.log("uncount!");
        }
    },[]);
    return <div>unmount testing component</div>
  };

  const Lifecycle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggle =() => setIsVisible(!isVisible);

    return (
    <div style={{padding:20}}>
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountTest/>}
    </div>
    );
  };

  export default Lifecycle;
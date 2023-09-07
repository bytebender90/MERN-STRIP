import { useEffect, useState } from "react";
import Funnel from "./Funnel";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
 
    import axiosClient from "../axios-client";

export default function FunnelLibrary () {
    const[funnels,setFunnels] = useState([]); 
    const[filrerdFunnels,setfilrerdfunnels] = useState([]); 
    const[Categories,setCategories] = useState([]); 
    const [selected, setSelected] = useState("");

    useEffect(()=>{
        axiosClient.get("/funnels/").then(data=> setFunnels(data)); 
    } , [] ) ;
   
    useEffect(()=>{
        const uniqueTags = [];
        funnels.map(funnel => {
            if (uniqueTags.indexOf(funnel.Categories) === -1) {
                uniqueTags.push(funnel.Categories)
            }
        });
        setCategories(uniqueTags);
        
    }, [funnels]); 
    useEffect(()=>{
        setfilrerdfunnels(funnels); 
    }, [funnels]); 
    const handelSearch = (e) =>{
        const inp = e.target.value; 

        const filter =funnels.filter(
            funnel => funnel.Title.toLowerCase().includes(inp.toLowerCase())
        );
        setfilrerdfunnels(filter); 
    }
    const handelTag = (e) =>{
        console.log (e.target.value);
        const inp = e.target.value; 
        console.log(inp);
        if (inp =="all") {
            setfilrerdfunnels(funnels); 

        }else { 
        const filter =funnels.filter(
            funnel => funnel.Categories == inp
        );
        setfilrerdfunnels(filter); 
        }
    }
    return (
        <> 
        <div className="row-2 m-4">
           
                <div className="input-group input-group-outline ">
                <div className="h4 m-2" > Search for Funnel Title  </div> 

            <input type="search" className="form-control h6 text-dark m-2 w-5" name = "Search" onInput={handelSearch} />
            <div className="h4 m-2" > | or  </div> 
            <select className="btn btn-dark m-2 w-40" onChange={handelTag}   >
                <option className="btn btn-dark m-2" value={"all"}> Select Category </option>
                {
                Categories.map (
                    Category=> 
                  <option className="btn btn-dark m-2 h6"  key={Category} value={Category} onInput={handelTag} > {Category} </option>

                 
                )
            }

            </select>
                </div>
              
         
          
        </div>
        <div className="row m-2">

            {
                filrerdFunnels.map (
                    funnel=> 
                  <div className="col-lg-4"  key={funnel._id}><Fade triggerOnce> <Funnel FunnelObject ={funnel} />  </Fade>  </div>
                 
                )
            }

       
        
             
      
        </div>
        </>
    )
}
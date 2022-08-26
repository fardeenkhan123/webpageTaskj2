import React,{useState,useEffect} from "react";
import axios from "axios";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export const Data=()=>{
    const[data,setData]=useState([]);



    const getData=async()=>{
        const result=await axios. get("https://fakestoreapi.com/products/1");
        console.log(result.data);
        setData([result.data])
    };

    useEffect(()=>{
       getData();
    },[]);
    return(
        <div>
             {data.map((Obj)=>{
                return(
                    <div>

                        <ImageList>
                            <ImageListItem>
                         <h1>{Obj.category},
                         {Obj.description},
                         {Obj.id},
                         <img src={Obj.image } width="200px" height="200px" alt="" />,
                         {Obj.price},
                         {Obj.rating.count},
                         {Obj.rating.rate}
                         {Obj.title},
                         {Obj.constructor}
                         {Obj.keys}</h1>
                         </ImageListItem>
                         </ImageList>
                    </div>

                )
             })}
             
            
        </div>
    )
}
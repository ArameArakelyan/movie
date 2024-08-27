import React from "react";

function InfoPanel({ data }) {
   console.log(data);
   
   let genre
   if (data.genres!=undefined) {
       genre = data.genres.map(el => {
         return el.name
     })
     genre = genre.join(", ")
   }

   let count
   if (data.production_countries!=undefined) {
       count = data.production_countries.map(el => {
         return el.name
     })
     count = count.join(", ")
     console.log(count);
     
   }
   return (
      <div style={{ display: "flex", padding: "0 80px"}}>
         <div style={{ color: "blue", padding: "20px 50px", fontSize: "20px" }}>
            <p>Movie Name : </p>
            <p>Release Date : </p>
            <p>Time : </p>
            <p>Budget : </p>
            <p>Genre : </p>
            <p>Countries : </p>
            <p>Tagline : </p>
         </div>
         <div style={{ color: "white", padding: "20px 50px", fontSize: "20px" }}>
            <p>{data.title}</p>
            <p>{data.release_date}</p>
            <p>{data.runtime} min.</p>
            <p>{data.budget/1000000} milion</p>
            <p>{genre}</p>
            <p>{count}</p>
            <p>{data.tagline}</p>
            </div>
      </div>
   )
}

export default InfoPanel
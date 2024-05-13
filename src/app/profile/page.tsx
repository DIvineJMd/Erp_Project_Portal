"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Container, Typography, Grid, CircularProgress } from "@mui/material";
import ProjectPage from "../components/Project/ProjectPage";
import Navbar from "../components/Project/navbar";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  useEffect(()=>{
    getUserDetails();
  },[])

  if(!data){
    return (
        <Container>
          <Typography variant="h4">User not found</Typography>
        </Container>
      );
  }

  return (
    data && (
      <div>
        <Navbar />
        <ProjectPage />
         
      </div>

    )
  );
}

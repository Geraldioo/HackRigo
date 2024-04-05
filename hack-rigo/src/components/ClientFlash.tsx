"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";


export const ClientFlashComponent = () => {
    const searchParams = useSearchParams();
    const errorMessage = searchParams.get("error")
    const successMessage = searchParams.get("success")

    useEffect(() => {
        if(successMessage){
            Swal.fire({
                title: 'Succes Create Account',
                text: 'Do you want to login ?',
                icon: 'success',
                confirmButtonText: "Let's Go"
              })
        }
    }, [])
    return (
        <>
            {errorMessage && (
                <h1 className="animate-pulse rounded bg-red-500 px-4 py-2 text-center text-white ">
                    {errorMessage}
                </h1>
            )}
        </>
    )
};



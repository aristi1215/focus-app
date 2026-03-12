import { supabase } from "@/supabase/client";
import { useState } from "react";


const useFetchFocusSession = () => {
    const [focusSession, setFocusSession] = useState({})


    // El mejor tiempo de foco para el usuario, se define por la hora en la que comenzó la sesión y tuvo la mejor calidad de enfoque distribuido a lo largo del timepo.
    // Esto quiere decir que sería, la hora con el mejor puntaje más repetida a lo largo del tiempo.

    const bestFocusTime = await supabase.from('focus_sessions').select('')

}
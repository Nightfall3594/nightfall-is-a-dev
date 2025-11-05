import {useEffect, useState} from "react";
import {API_URL} from "../config/constants.js"

export default function useProjects() {

    const [projects, setProjects] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/projects`)
            .then(res => res.json())
            .then(({projects}) => {
                setProjects(projects)
                setIsLoading(false)
            })
            .catch(err => alert(err))
    }, [])

    return {projects, isLoading}
}
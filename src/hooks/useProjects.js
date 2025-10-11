import {useEffect, useState} from "react";

export default function useProjects() {

    const [projects, setProjects] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8181/projects")
            .then(res => res.json())
            .then(({projects}) => {
                setProjects(projects)
                setIsLoading(false)
            })
            .catch(err => alert(err))
    }, [])

    return {projects, isLoading}
}
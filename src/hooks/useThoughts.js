import {useEffect, useState} from "react";

export function useThoughts() {

    const [thoughts, setThoughts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8181/thoughts')
            .then(res => res.json())
            .then(({thoughts}) => {
                setThoughts(thoughts)
                setIsLoading(false)
            })
    }, [])

    return {thoughts, isLoading};
}
import {useEffect, useState} from "react";
import {API_URL} from "../config/constants.js"

export function useThoughts() {

    const [thoughts, setThoughts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`${API_URL}/thoughts`)
            .then(res => res.json())
            .then(({thoughts}) => {
                setThoughts(thoughts)
                setIsLoading(false)
            })
    }, [])

    return {thoughts, isLoading};
}
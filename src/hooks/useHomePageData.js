import React, {useEffect} from "react";

export default function useHomePageData(){

    const [recentNotes, setRecentNotes] = React.useState([]);
    useEffect(() => {
        fetch('http://localhost:8181/articles')
            .then(response => response.json())
            .then(data => {
                setRecentNotes(data.articles);
            })
    },[])


    const [recentProjects, setRecentProjects] = React.useState([]);
    useEffect(() => {
        fetch('http://localhost:8181/projects')
            .then(response => response.json())
            .then(data => {
                setRecentProjects(data.projects);
            })
    }, []);


    const [timeline, setTimeline] = React.useState([]);
    useEffect(() => {
        fetch('http://localhost:8181/timeline')
            .then(response => response.json())
            .then(data => {
                setTimeline(data.items);
            })
    }, []);


    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        if(recentNotes.length > 0 && recentProjects.length > 0 && timeline.length > 0) {
            setIsLoading(false);
        }
    }, [recentNotes.length, recentProjects.length, timeline.length]);

    return {recentNotes, recentProjects, timeline, isLoading};
}
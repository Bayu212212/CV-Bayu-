'use strict';

const languages = [
    {
        label: 'HTML',
        color: '#fff',
        bgColor: '#F06529'
    },
    {
        label: 'CSS',
        color: '#fff',
        bgColor: '#2965F1'
    },
    {
        label: 'JavaScript',
        color: '#000',
        bgColor: '#F0DB4F'
    },
    {
        label: 'PHP',
        color: '#fff',
        bgColor: '#777BB3'
    },
    {
        label: 'Git',
        color: '#fff',
        bgColor: '#F1502F'
    }
];

function alpineData() {
    return {
        toggle: 0,
        repositories: [],
        initData() {
            axios.get('https://api.github.com/users/Bayu212212/repos', {})
            .then((response) => {
                this.repositories = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    
    }
}
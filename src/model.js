function fetchData() {
    fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics")
    .then(response => {    
        if (!response.ok){
        throw Error("Error")
    }
        return response.json();
     
    })
    .then(data => {
       console.log(data.response.results);
       const html = data.response.results
       .map(news => {
        return `
           <div class="news">
           <p><img src="${news.webUrl}" alt=${news.webTitle}" /></p>
            <h3>Headline: ${news.webTitle}</h3>
            <P><a href=${news.webUrl} target="${news.webUrl}">Full Story:</a></P>
           </div>
           `

       })
       .join('');
       console.log(html);
       document.querySelector('#app').insertAdjacentHTML('afterbegin', html) 
    }).catch(error => {   
        console.log(error)
    });
}

fetchData();
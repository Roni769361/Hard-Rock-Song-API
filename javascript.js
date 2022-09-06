function search_Data(){
    const searchResult = document.getElementById("resultSearch").value;
    document.getElementById("resultSearch").value = "";
    document.getElementById("getSong").innerHTML = "";
    fetch (`https://api.lyrics.ovh/suggest/${searchResult}`)
        .then(res =>res.json())
        .then(data => findData(data))
        // .catch(error => displayError('Something Went Wrong!! Please try again later!'));
        
}
function findData(song){
    // console.log(song.data)
    const AllData1 = song.data;
    const AllData = AllData1.slice(0, 10);
    // console.log(AllData)
    for (let i = 0; i < AllData.length; i++) {
        const AllDatabase = AllData[i];
        // console.log(AllDatabase.title);
        const getData = document.getElementById("getSong");
        const setData = document.createElement('div');
        setData.className = "single-result row align-items-center my-3 p-3";
        setData.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${AllDatabase.title}</h3>
            <p class="author lead">Album by <span>${AllDatabase.artist.name}</span></p>
            <audio controls>
            <source src="${AllDatabase.preview}" type ="audio/mpeg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">

            <a class="btn btn-success" href="${AllDatabase.link}" target="_blank">Play Full Song</a>
        </div>
        `
        getData.appendChild(setData);
    }
}
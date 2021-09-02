document.getElementById('add-border').addEventListener('click', function () {

    // console.log('add border');
    const container = document.getElementById('freind-container');
    container.style.border = '3px solid yellow';

})
function addBackground() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';

    }
}
document.getElementById('add-friend').addEventListener('click', function () {
    const addFriend = document.getElementById('freind-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `<h3 class="friemd-name-new">friemd-3</h3>
    <p>Lorem, ipsum.</p>`
    addFriend.appendChild(friendDiv);


})
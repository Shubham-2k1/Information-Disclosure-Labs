async function onsubmit1() {
    const data = document.getElementById("flag1").value;
    try {
        const response = await fetch('/verify-flag1');
        const result = await response.json();
        const flag = result.flag;

        if (data === flag) {
            alert('Flag 1 is correct');
        } else {
            alert('Flag Incorrect');
        }
    } catch (error) {
        console.error('Error fetching the flag:', error);
        alert('Error verifying the flag');
    }
}


function onsubmit2(){
    const data = document.getElementById("flag2").value;
    if(data === 'FLAG2{H1D3_1MP0RTANT_DATA_1N_ENV1R0NM3NTS}')
    {
        alert('Flag 2 is correct')
    }
    else{
        alert('Flag Incorrect')
    }

}

async function onsubmit3() {
    const data = document.getElementById("flag3").value;
    try {
        const response = await fetch('/verify-flag3');
        const result = await response.json();
        const flag = result.flag;

        if (data === flag) {
            alert('Flag 1 is correct');
        } else {
            alert('Flag Incorrect');
        }
    } catch (error) {
        console.error('Error fetching the flag:', error);
        alert('Error verifying the flag');
    }
}

async function admin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('/get-flag1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        });

        if (response.ok) {
            const result = await response.json();
            const flag = result.flag;
            let div = document.getElementById("message");
            div.innerHTML = `${flag}`;
        } else {
            console.error('Failed to authenticate');
            let div = document.getElementById("message");
            div.innerHTML = `Authentication failed`;
        }
    } catch (error) {
        console.error('Error:', error);
        let div = document.getElementById("message");
        div.innerHTML = `Error: ${error.message}`;
    }
}
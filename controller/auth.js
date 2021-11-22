const auth = (req, res) => {
    // const streamkey = req.body.key;
    // console.log("key: ", streamkey);
    // if (streamkey === "supersecret") {
    //     console.log("Da vao day");
    //   res.status(200).send();
    //   return;
    // }
    // /* Reject the stream */
    // res.status(403).send();

    res.status(200).send()
}

const authConnect = (req, res) => {
   res.status(200).send()
   
}
const auth_done = (req, res) => {
    const key = req.body.name;
    console.log(`Finish Stream with key ${key}`);
    return res.json({
        done: true
      })
}

const on_play = (req, res) => {
    const keyPlay = req.body.name;
    if(keyPlay === 'quang'){
        console.log("Start play stream");
        return res.status(200).send();
    }
    res.status(404).send()
}

const on_play_done = (req, res) => {
    const keyPlay = req.body.name;
    console.log(`Play stream done with key ${keyPlay}`);
}
const on_record_done = (req, res) => {
    console.log("Record done!");
}
module.exports = {
    auth, auth_done, authConnect, on_play, on_play_done, on_record_done
}


function samplePromise(){
    return Promise.resolve("Bowo");
}

    const name = await samplePromise();
    console.info(name);

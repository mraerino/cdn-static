const main = async () => {
    console.log("Hello World!");
}

if (require.main === module) {
    main().catch(e => console.error("Failed: ", e))
}

export default main

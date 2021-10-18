function handleIncomingContext(contextInfo) {
    const { type, id } = contextInfo;
    switch (type) {
        case 'instrument':
            handleInstrumentContext(contextInfo);
            break;
        default:
            break;
    }
}

function handleInstrumentContext(contextInfo) {
    const { type, id } = contextInfo;
    document.getElementById("p1").innerHTML = id.ticker;
    //add rest calls 
}

fin.me.interop.addContextHandler(handleIncomingContext);
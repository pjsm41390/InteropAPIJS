function handleIncomingContext(contextInfo) {
    const { type, id } = contextInfo;
    switch (type) {
        case 'instrument':
            handleInstrumentContext(contextInfo);
            break;
        case 'country':
            handleCountryContext(contextInfo);
            break;

        default:
            break;
    }
}


function handleInstrumentContext(contextInfo) {
    const { type, id } = contextInfo;
    document.getElementById("p1").innerHTML = id.ticker;
}

function handleCountryContext(contextInfo) {
    const { type, id } = contextInfo;
}

fin.me.interop.addContextHandler(handleIncomingContext);
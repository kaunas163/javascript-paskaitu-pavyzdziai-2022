let paieskos_fraze = 'SlaPtas';

if (paieskos_fraze == 'slaptas') {
    console.log('radome, case sensitive');
} else if (paieskos_fraze.toLowerCase() == 'slaptas') {
    console.log('radome, case insensitive');
} else if (paieskos_fraze.toLowerCase() != 'slaptas') {
    console.log('neradome');
}

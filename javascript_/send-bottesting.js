function post() {
    const user = document.getElementById('remitente').value;
	const req = document.getElementById('request').value;
	const remitente = document.getElementById('remitente').value;
	if (!remitente) {
		return alert('Quien envia la solicitud?');
	}
		
	var hoy = new Date();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
	axios.post(
		'https://discord.com/api/webhooks/972575340255911936/JOu6odw96wzJ8dow4CJ-v3lxzyYc4d3R8dttl_UVFfI-pcv3_VFuNKLfMjRP0TtH1FY_',
		{
			type: 1,
			id: '752831914402115456',
			name: 'Guildy name',
			avatar: 'bb71f469c158984e265093a81b3397fb',
			channel_id: '972572832410267678',
			guild_id: '969728711828062248',
			application_id: null,
			user: {
				username: 'Nuevo pedido!',
				discriminator: '1998',
				id: '190320984123768832',
				avatar: 'b004ec1740a63ca06ae2e14c5cee11f3',
				public_flags: 131328,
			},
			content: `**Nuevo Pedido!**\n
\`\`\`fix\n
${user}\n
=======\n
https://discord.com/api/oauth2/authorize?client_id=${req}&permissions=8&scope=bot%20applications.commands\n
\`\`\`\nHora: ${hora}\nFecha: ${fecha}\nTipo de Pedido: Bot Testing\n` 
+ "~~_ _                                                                                                  _ _~~",

		}
	);
	setTimeout( function() { window.location.href = "./gracias.html"; }, 1000 );
}



'use strict';

	 let arr1 = [
	{name: 'damilola oderanti', email: 'dami@gmail.com', phone: '08077301227'},
	{name: 'grandpa alabi', email: 'demolab@gmail.com', phone: '08033340832'}
	];

		function firstNameArray(arr1){
			var	arr2 = [];
			for(var i = 0; i < arr1.length; i++){
				arr2.push(arr1[i].name);
			}
				var arr3 = arr2.map(function(val){
					var firstName = val.split(' ');
					return firstName[0];
				});
			return arr3;
		}

		function compare(a, b){
			return a.name > b.name;
		}

		console.log(arr1.sort(compare));

		let row = document.querySelector('.row');

		let newEntry = document.createElement('button');
			newEntry.setAttribute('class','btn btn-info btn-sm');
			newEntry.textContent = 'Add New Contact';

			row.previousSibling.before(newEntry);

			function newInput(){
				var anotherEntry = document.querySelector('.newContact');
				if(!anotherEntry){
				let contact = document.createElement('div');
					contact.setAttribute('class', 'contact newContact');

				let tag = document.createElement('h4');
				tag.innerHTML = 'New Contact<hr>';

				let img = document.createElement('img');
				img.src = 'img/bgg0.jpg';

				let name = document.createElement('span');
				name.innerHTML = '<br>name: <input placeholder="Enter name"><hr>';

				let email = document.createElement('span');
				email.innerHTML = 'email: <input placeholder="Enter email"><hr>';

				let phone = document.createElement('span');
				phone.innerHTML = 'phone: <input placeholder="Enter phone number"><hr>';

				let btns = document.createElement('span');
				btns.innerHTML = '<button class="btn btn-sm delete btn-danger newEntryCancel" placeholder="Cancel Button">Cancel</button><button class="btn btn-sm saved newEntrySave" placeholder="Save Button">Save</button>';

				contact.appendChild(tag);
				contact.appendChild(img);
				contact.appendChild(name);
				contact.appendChild(email);
				contact.appendChild(phone);
				contact.appendChild(btns);

				row.prepend(contact);

					console.log(row);

		// declaring variables for the cancel and save buttons of the new contact entry

			let newEntryCancel = document.querySelector('.newEntryCancel');
			let newEntrySave = document.querySelector('.newEntrySave');
			let	newContact = document.querySelector('.newContact');

			newEntryCancel.addEventListener('click', function(){
				console.log(row.removeChild(row.firstChild));
			});


			newEntrySave.addEventListener('click', function(){
				var added = row.firstChild;
				console.log(added);
				console.log(added.childNodes[2].childNodes[2].value);
				console.log(added.childNodes[3].childNodes[1].value);
				console.log(added.childNodes[4].childNodes[1].value);

				var newName  = added.childNodes[2].childNodes[2].value;
				var newEmail = added.childNodes[3].childNodes[1].value;
				var newPhone = added.childNodes[4].childNodes[1].value;

					added.setAttribute('class', 'contact');
				arr1.push({name: newName, email: newEmail, phone: newPhone});
				// console.log(added.getAttribute('class'));
				// row.removeChild(added);
				row.appendChild(added);

				firstRun();

				// console.log(row.childNodes.length);
				added.firstChild.textContent = row.childNodes.length;
				// console.log(added.firstChild.textContent);
				// console.log(added.firstChild);
				number.textContent++;
			});


				}
			else {
				alert('Please fill the new entry first!');}}

			newEntry.addEventListener('click', newInput);



	firstRun();

	let number = document.querySelector('.number');
	number.textContent = arr1.length;

	function firstRun(){
		row.innerHTML = '';
	// console.log(arr1);

		let count = 1;
	for (var i = 0; i < arr1.length; i++){


		let contact = document.createElement('div');
		contact.setAttribute('class', 'contact');

		let tag = document.createElement('h4');
		tag.innerHTML = count + '<hr>';

		let name = document.createElement('span');
		name.innerHTML = 'name: ' + arr1[i].name + '<hr>';

		let img = document.createElement('img');
		// img.src = 'img/bgg' + i + '.jpg';
		img.src = 'img/bgg0' + '.jpg';

		let email = document.createElement('span');
		email.innerHTML = 'email: ' + arr1[i].email + '<hr>';

		let phone = document.createElement('span');
		phone.innerHTML = 'phone: ' + arr1[i].phone + '<hr>';

		let btns = document.createElement('span');
		btns.innerHTML = '<button class="btn btn-sm delete btn-danger" value="' + arr1[i] + '">Delete</button><button class="btn btn-sm edit btn-primary" value="' + arr1[i] + '">Edit</button>';

		contact.appendChild(tag);
		contact.appendChild(img);
		contact.appendChild(name);
		contact.appendChild(email);
		contact.appendChild(phone);
		contact.appendChild(btns);

		row.appendChild(contact);

		count++;
	}
}

		var contacts = document.querySelectorAll('.contact');

function itemDone(e){
	let target, parent, gParent;
	target = e.target;
	parent = target.parentNode;
	gParent = parent.parentNode;
	gGParent = gParent.parentNode;
	gGParent.removeChild(gParent);
}

let deleteBtn = document.querySelectorAll('.btn-danger');
let editBtn = document.querySelectorAll('.btn-primary');


deleteBtn.forEach(function(del){

del.addEventListener('click', function(e){
	var nameSpanContent = del.parentNode.parentNode.firstChild.nextSibling.nextSibling;
	var nameSplit = nameSpanContent.textContent.split(':');
	var justName = nameSplit[1].toUpperCase();

	var divNumber = document.querySelectorAll('.contact');
	var main = e.target.parentNode.parentNode.firstChild.textContent;

	// if(arr1.length < 2){
	if(divNumber.length < 2){
		alert('Address book cannot be emptied!');
		return false;
	} else {
	let ans = confirm('Delete ' + justName + '?');
	if(ans){
	// itemDone(e);

	row.removeChild(divNumber[main-1]);


	number.textContent = arr1.length;
	var list = document.querySelectorAll('h4');
	number.textContent = list.length;
	for(var i = 0; i < list.length; i++){
		list[i].textContent = i + 1;

	}
	}
}

}, false);
})

editBtn.forEach(function(edit){

	edit.addEventListener('click', function(e){
		var saveBtn = document.createElement('button');
		saveBtn.setAttribute('class','btn btn-sm saved');
		saveBtn.textContent = 'Save';
		edit.parentNode.appendChild(saveBtn);

		// console.log(edit.parentNode);
		// console.log(edit.getAttribute('class'));

		var contactPage = edit.parentNode.parentNode.childNodes;

		var textCon1 = contactPage[2].textContent;
		var textCon2 = contactPage[3].textContent;
		var textCon3 = contactPage[4].textContent;

		var textCon1Split = textCon1.split(':');
		var actualText1 = textCon1Split[1];
		// console.log(actualText1);

		var textCon2Split = textCon2.split(':');
		var actualText2 = textCon2Split[1];
		// console.log(actualText2);

		var textCon3Split = textCon3.split(':');
		var actualText3 = textCon3Split[1];
		// console.log(actualText3);

		var textCon2 = contactPage[3].textContent;
		var textCon3 = contactPage[4].textContent;

		contactPage[2].innerHTML = '<input placeholder="' + actualText1 + '" value="' + actualText1 + '"></input>';
		contactPage[3].innerHTML = '<input placeholder="' + actualText2 + '" value="' + actualText2 + '"></input>';
		contactPage[4].innerHTML = '<input placeholder="' + actualText3 + '" value="' + actualText3 + '"></input><p>';


var saveFinal = document.querySelectorAll('.saved');

		// console.log(saveFinal);

		saveFinal.forEach(function(save){

			save.addEventListener('click', function(e){
			var input = document.querySelectorAll('input');
				// console.log(input[0].value, input[1].value, input[2].value);

			var sure = confirm('Ready to save?');
				if(sure){
			var	newName  = save.parentNode.parentNode.firstChild.nextSibling.nextSibling;
			var	newEmail = newName.nextSibling;
			var	newPhone = newEmail.nextSibling;

				newName.innerHTML  = 'name: ' + input[0].value + '<hr>';
				newEmail.innerHTML = 'email: ' + input[1].value + '<hr>';
				newPhone.innerHTML = 'phone: ' + input[2].value + '<hr>';


				save.style.display = 'none';
				edit.style.display = 'inline';

		reSort();

				// function sorted(a, b){

				// 	var  reArrangedA = a.textContent;
				// 	var  reArrangedB = b.textContent;
				// 	return reArrangedA > reArrangedB;
				// }
				// 	var rr = reArranged[1].textContent;
				// 		console.log(rr.substring(7, 15));

				// console.log(reArranged.map(function(a, b){

				// 	var  reArrangedA = a.textContent;
				// 	var  reArrangedB = b.textContent;
				// 	return reArrangedA > reArrangedB;
				// }));

				// for(var i = 0; i < reArranged.length; i++){
				// 	row.appendChild(reArranged[i]);
				// }
				// console.log(row);


			}

		}, false);

	});

}, false);
})

				function reSort(){
				var reArranged = document.querySelectorAll('.contact');
				// console.log(reArranged[1].innerHTML);

					 arr1 = [];
				reArranged.forEach(function(item){
					var nameArray = item.firstChild.nextSibling.nextSibling;
					var nameArr = nameArray.textContent.substring(6);
					var emailArr = nameArray.nextSibling.textContent.substring(7);
					var phoneArr = nameArray.nextSibling.nextSibling.textContent.substring(7);

					var newObj = {name: nameArr, email: emailArr, phone: phoneArr};

					arr1.push(newObj);
				})
					// console.log(arr1);
					console.log(arr1.sort(compare));

					// firstRun();

				 deleteBtn = document.querySelectorAll('.btn-danger');
				 editBtn = document.querySelectorAll('.btn-primary');

				}

import React from 'react';
import ComponentThiNghiem from '../../app/modules/message/ComponentThiNghiem';


import {shallow, mount} from 'enzyme';

describe('Link changes the class when hovered', () => {
    const wrapper = shallow(<ComponentThiNghiem/>);

    it('get Values State in Components', () => {
        expect(wrapper.state().data).toBe('first State')
    });


    it('test h4', () => {
        expect(wrapper.find('h4').length).toBe(1);  //So luong tag trong render

        expect(wrapper.find('h4').at(0).text()).toBe('Test Component');  // Noi dung ben trong tag h4 o vi tri dau tien
    });

    it('test button', () => {
        expect(wrapper.state().data).toBe('first State');
        wrapper.find('button').simulate('click');
        expect(wrapper.state().data).toBe('second State')
    });

    //https://stackoverflow.com/questions/41732318/test-setting-text-value-with-react-and-enzyme

    it('test input onchange ', () => {
        expect(wrapper.state().text).toBe('');
        wrapper.find('input').simulate('change', {target: {value: 'test'}});
        expect(wrapper.state().text).toBe('test');
    });

    it('test rest operator', () => {
            const [x, ...y] = ['a', 'b', 'c'];
            console.log(x);
            console.log(y);
            const obj = {};
            ({foo: obj.prop} = {foo: 123});
            console.log(obj);
        }
    );

    it('test new line', () => {
        const noNewLine = 'ABC' +
            'abc';
        const newLine = `ABC
       abc`;
        console.log(noNewLine);
        console.log(newLine);
    });

    it('test arrow function ', () => {
        let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
        console.log(f());
    });

    it('test arrowfunction', () => {
        function ES6(name, message) {
            console.log("Hello" + name + " here is a message from function " + message);
        }

        ES6('Testname', 'message Test');
    });

    it('test ham map', () => {
        const materials = [
            'Hydrogen',
            'Helium',
            'Lithium',
            'Beryllium'
        ];

        materials.map(function (material) {
            console.log(material.length);
        }); // [8, 6, 7, 9]

        materials.map((material) => {
            console.log(material.length);
        }); // [8, 6, 7, 9]

        materials.map(material => console.log(material.length)); // [8, 6, 7, 9]
    });

    it('test rest parameter', () => {
        let domainList = (main, sub, ...other) => {
            console.log("Main " + main);
            console.log("Sub: " + sub);
            console.log("Other");
            console.log(typeof other);
        };
        domainList('htwk.de', 'facebook.com', 'google.com', 'zalo.com', 'iphone.com');
    });


    it('test destructured trong ES 6 Array', () => {
        let Date = [1, 2, 2017];
        let [d, m, y] = Date;
        console.log("Day: " + d);   // Day: 01
        console.log("Month: " + m); // Month: 02
        console.log("Year: " + y);  // Year : 2017
    });

    it ('Test destructur trong ES6 Object' , () =>{
        // Object
        let date = {
            day : 10,
            month : 6,
            year : 2016
        };

// Chuyển ba giá trị vào ba biến
        let {day : d, month : m, year : y} = date;

// In kết quả
        console.log("Day: " + d);
        console.log("Month: " + m);
        console.log("Year: " + y);
    });

    it('test spread opeator' ,() =>{
       const a = [1,2,3];
       const b = [3,4,5,6];

       let combine = [...a,...b];

       console.log(combine);
    });

    it ('test ' ,() =>{
       const fullName = ["abc", "def"];

       function sayName(firstName, lastName) {
           console.log( firstName + ' ' + lastName);
       }
       sayName(...fullName);
    });

    it ('test Array ' ,() =>{
        const obj1 ={
            foo: 'bar',
            x : 42
        };

        const obj2 = {
            foo:'baz',
            y:20
        };

        let mergeObj = {...obj1,...obj2};

        console.log(mergeObj);
    });

    it ('test Promise' ,()=>{
        let promise = new Promise(function(resolve, reject){
            resolve('Success');
            // OR
            reject('Error');
        });


        promise.then(
            function(success){
                console.log(success);
            },
            function(error){
                console.log(error);
            }
        );
    });


});
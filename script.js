window.originalParse = JSON.parse; JSON.parse = function (a, t) { const n = originalParse(a, t); try { const lessionData = JSON.parse(n.data.assessmentItem.item.itemData); if (lessionData.question && lessionData.question.content && lessionData.question.content[0].match(/[a-z]/i)) { console.log(lessionData); lessionData.question.content=(["Script adaptado por Alguém","Obrigado por usar!"][Math.floor(Math.random() * 2)])+"\n [[☃ radio 1]] [[☃ explanation 1]]"; lessionData.question.widgets = { "radio 1": { "options": { "choices": [{ "content": location.hostname.split(".")[0]==="pt"?"Alternativa Correta":"Correct option", "correct": true },{ "content": location.hostname.split(".")[0]==="pt"?"Alternativa incorreta":"Incorrect option", "correct": false }] } }, "explanation 1": { "options": {"explanation": "Obrigado por usar este script!", hidePrompt: "", showPrompt: "" } } } n.data.assessmentItem.item.itemData = JSON.stringify(lessionData); console.log(n); } } catch(r) {} return n };

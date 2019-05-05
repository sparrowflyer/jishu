import React from 'react';
import { Avator } from '../../component/Avator/Web.js';
import { SubTitle } from '../../component/SubTitle.js';
import { Conversation } from '../../component/Conversation.js';
import { Evaluation } from '../../component/Evaluation.js';

const test_conversations = [
    {
        title: '教育',
        desc: '教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育'
    }, {
        title: '经历',
        desc: '经历经历经历经历经历'
    }, {
        title: '兴趣',
        desc: '兴趣兴趣兴趣兴趣兴趣兴趣兴趣兴趣'
    }, {
        title: '爱好',
        desc: '爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好'
    }
];

const test_evaluations = [{
    name: '贾杰',
    desc: '好评好评好评',
    score1: 4.5,
    score2: 4.7,
    score3: 4.0
}, {
    name: 'Joseph Jackson',
    desc: '好评好评好评好评好评好评好评好评好评好好评好评好评好评好评好好评好评好评好评好评好评好评好评好评好评',
    score1: 4.9,
    score2: 4.0,
    score3: 5.0
}, {
    name: 'Kayla',
    desc: '好评好评好评好评好评好评好评好评好评',
    score1: 4.3,
    score2: 3.9,
    score3: 4.4
}, {
    name: 'Cheryl',
    desc: '好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评好评',
    score1: 4.9,
    score2: 4.8,
    score3: 5.0
}];

export class Web extends React.Component {
    render() {
        return (
            <div>
                <Avator />
                <SubTitle cn="他的话题" en="Topic of conversation" top={80} bottom={50} />
                <div className="conversation-container">
                    {
                        test_conversations.map((conversation) => {
                            return (
                                <Conversation key={conversation.title} {...conversation} />
                            );
                        })
                    }
                </div>
                <SubTitle cn="他的评价" en="Evaluation" top={80} bottom={75} />
                <div className="evaluation-container">
                    {
                        test_evaluations.map((evaluation, index) => {
                            return (
                                <Evaluation key={evaluation.name} {...evaluation} isActive={index === 1}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

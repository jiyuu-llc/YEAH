import React from 'react';

const Home = () => ({

    render() {
        return (
            <div id="home" className="yh-content champagneBold">Young Entrepreneurs Association of Harrisburg</div>
        );
    },
    componentDidMount(){
        $( "#home" ).fadeIn( 1000, function() {
            setTimeout(function(){
                FlowRouter.go("/news");
            }, 2000);

        });

    }
});

export default Home;

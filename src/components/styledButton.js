import React from "react";

import styled from "styled-components";

const Button = styled.button`
display: block;
	background-color: ${props => (props.done ? "#27ae60" : "#c0392b")};
    width: 74px;
    height: 37px;
	line-height: 100px;
	color: #fff;
	cursor: pointer;
	overflow: hidden;
	border-radius: 5px;
	box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
    transition: all .25s cubic-bezier(0.310, -0.105, 0.430, 1.400);
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
	span,
	.icon {
		display: block;
		height: 100%;
		text-align: center;
		position: absolute;
		top: 0;
	}
	
	span {
		width: 72%;
		line-height: inherit;
		font-size: 22px;
		text-transform: uppercase;
		left: 0;
		transition: all .25s cubic-bezier(0.310, -0.105, 0.430, 1.400);
		
		&:after {
			content: '';
			background-color: #f9f9f9;
			width: 1px;
			height: 70%;
			position: absolute;
			top: 15%;
			right: -1px;
		}
	}
	
	.icon {
		width: 28%;
		right: 0;
		transition: all .25s cubic-bezier(0.310, -0.105, 0.430, 1.400);
		
		.fas {
			font-size: 30px;
			vertical-align: middle;
			transition: $transition, height .25s ease;
		}
		
		.fa-time {
			height: 36px;
		}
		
		.fa-check {
			display: none;
		}
	}
	
	&.success,
	&:hover {
		
		span {
			left: -10%;
			opacity: 0;
		}
		
		.icon {
			width: 100%;
			
			.fas {
				font-size: 45px;
			}
		}
	}
	
	&.success {
		background-color: #27ae60;
		
		.icon {
			
			.fa-time{
				display: none;
			}
			
			.fa-check {
				display: inline-block;
			}
		}
	}
	
	&:hover {
		opacity: .9;
		
		.icon .fa-time {
			height: 46px;
		}
	}
	
	&:active {
		opacity: 1;
    }
}
`;

export const StyledButton = ({ ...props }) => (
  <>
    <Button>
      <span>{`${props.status ? "done" : "do"}`}</span>
      <div className="icon">
      {props.status ? <i className="fas fa-times"></i> : <i className="fas fa-check"></i>}
      </div>
    </Button>
  </>
);
